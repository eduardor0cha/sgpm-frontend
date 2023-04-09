import GenericProfilePic from "../assets/profile/generic-profilepic.jpg";

export function getProfilePicUrl(profilePic?: string): string {
  if (!profilePic) return GenericProfilePic;

  return `${process.env.REACT_APP_API_URL}/files/${profilePic}`;
}
