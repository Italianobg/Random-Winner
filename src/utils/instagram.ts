import { v4 } from "uuid";
import { getMediaComments } from "../api/lib/instagram";
import { removeDuplicates } from "./common";
import { Comment, Data } from "../provider/Data";
import { Profile } from "../provider/Profile";

function getAccounts(response: any): Object[] {
  let pages: Object[] = [];
  response.data.data.forEach((page: Object) => {
    pages.push(page);
  });
  return pages;
}

function getInstagramAccounts(pages: Object[]): Object[] {
  let instagramPages = pages.filter((page) =>
    page.hasOwnProperty("instagram_business_account")
  );
  return instagramPages;
}

function getComments(
  data: Data,
  setDataData: Function,
  user: Profile,
  after: string
) {
  getMediaComments(data.selectedMediaId, user.accessToken, after).then(
    (res: any) => {
      //Check if there are more results/paging/ and if so calls the function again
      if (res.data.hasOwnProperty("paging") && res.data.paging.cursors.after) {
        getComments(
          data,
          setDataData,
          user,
          "&after=" + res.data.paging.cursors.after
        );
      }
      // Format comments data and add additional variables
      let comments: Comment[] = formatComments(res.data.data);
      let commentsCounter = getCommentsCount(comments);
      let repliesCounter = getRepliesCount(comments);
      let uniqueUserCounter = getUniqueUserCount(comments);

      setDataData({
        ...data,
        comments,
        commentsStats: { commentsCounter, repliesCounter, uniqueUserCounter },
      });
    }
  );
}

function formatComments(data: any): Comment[] {
  let formattedComments: Comment[] = [];

  if (data.length > 0) {
    data.forEach((comment: any) => {
      let obj: Comment = {
        id: comment.id,
        username: comment.username,
        text: comment.text,
        type: "c",
      };
      formattedComments.push(obj);
      if (comment.hasOwnProperty("replies")) {
        comment["replies"]["data"].forEach((reply: any) => {
          obj = {
            id: reply.id,
            username: reply.username,
            text: reply.text,
            type: "r",
          };
          formattedComments.push(obj);
        });
      }
    });
  }
  return formattedComments;
}

function getCommentsCount(comments: Comment[]): number {
  return comments.filter((rec: any) => rec.type === "c").length;
}

function getRepliesCount(comments: Comment[]): number {
  return comments.filter((rec: any) => rec.type === "r").length;
}

function getAdditionalRecordsCount(comments: Comment[]): number {
  return comments.filter((rec: any) => rec.type === "a").length;
}

function getUniqueUserCount(comments: Comment[]): number {
  return new Set(comments.map((rec: any) => rec.username)).size;
}

function applySettings(data: Data, setDataData: Function) {
  const { comments, settings } = data;
  let qualifiedComments: Comment[] = [];
  qualifiedComments = comments;

  // Remove replies if selected
  if (settings.replies) {
    qualifiedComments = qualifiedComments.filter(
      (res: any) => res.type !== "r"
    );
  }

  // Filter by number of mentions
  if (settings.mentions > 0) {
    qualifiedComments = qualifiedComments.filter((res: any) => {
      let textArr = res.text.split(" ");
      let counter = 0;
      textArr.forEach((word: string) => {
        if (word.startsWith("@") && word.length > 1) {
          counter++;
        }
      });
      if (counter >= settings.mentions) {
        return true;
      } else return false;
    });
  }

  // Remove duplicates if selected
  if (settings.duplicate) {
    qualifiedComments = removeDuplicates(qualifiedComments);
  }

  // Add records
  let addArray: string[] = [];
  qualifiedComments = qualifiedComments.filter((resulta: any) => {
    return resulta.type !== "a";
  });
  addArray = settings.add.split("\n");
  addArray = addArray
    .filter((participant) => {
      if (
        participant.length === 0 ||
        participant === "@" ||
        participant.trim().length === 0
      )
        return false;
      else return true;
    })
    .map((participant) => {
      if (participant.startsWith("@")) {
        return participant.slice(1);
      } else return participant;
    });

  if (addArray.length > 0) {
    addArray.forEach((participant) => {
      qualifiedComments.push({
        id: v4(),
        username: participant,
        type: "a",
        text: "",
      });
    });
  }

  // Remove records
  let excludeArray: string[] = [];
  excludeArray = settings.exclude.split("\n");
  excludeArray = excludeArray
    .filter((participant) => {
      if (participant.length === 0 || participant === "@") return false;
      else return true;
    })
    .map((participant) => {
      if (participant.startsWith("@")) {
        return participant.slice(1);
      } else return participant;
    });

  if (excludeArray.length > 0) {
    qualifiedComments = qualifiedComments.filter((participant: any) => {
      if (excludeArray.includes(participant.username)) {
        return false;
      } else return true;
    });
  }

  // Creating additional variables
  let commentsCounter = getCommentsCount(qualifiedComments);
  let repliesCounter = getRepliesCount(qualifiedComments);
  let additionalEntriesCounter = getAdditionalRecordsCount(qualifiedComments);
  let uniqueUserCounter = getUniqueUserCount(qualifiedComments);

  // Save Data Context based on applied settings
  setDataData({
    ...data,
    qualifiedComments,
    qualifiedCommentsStats: {
      commentsCounter,
      repliesCounter,
      additionalEntriesCounter,
      uniqueUserCounter,
    },
  });
}

// Reset Data Context variables
function clearData(setData: Function): void {
  setData({
    loadingInstagramAccounts: false,
    instagramAccounts: [],
    selectedInstagramAccount: {
      id: "",
      name: "",
      followers_count: "",
      profile_picture_url: "",
    },
    loadingMedia: false,
    media: [],
    selectedMediaId: "",
    loadingComments: false,
    comments: [],
    commentsStats: {
      commentsCounter: 0,
      repliesCounter: 0,
      uniqueUserCounter: 0,
    },
    qualifiedComments: [],
    qualifiedCommentsStats: {
      commentsCounter: 0,
      repliesCounter: 0,
      additionalEntriesCounter: 0,
      uniqueUserCounter: 0,
    },
    winners: [],
    settings: {
      mentions: 0,
      replies: false,
      duplicate: false,
      exclude: "",
      add: "",
    },
  });
}

export {
  getAccounts,
  getInstagramAccounts,
  getComments,
  applySettings,
  clearData,
};
