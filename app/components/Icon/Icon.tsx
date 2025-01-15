import Download from "@/app/icons/Download";
import Email from "@/app/icons/Email";
import GitHub from "@/app/icons/GitHub";
import Instagram from "@/app/icons/Instagram";
import LinkedIn from "@/app/icons/LinkedIn";

type IconType = {
  name: string;
};

export default function Icon(icon: IconType) {
  switch (icon.name) {
    case "GitHub":
      return <GitHub />;
    case "LinkedIn":
      return <LinkedIn />;
    case "Instagram":
      return <Instagram />;
    case "Email":
      return <Email />;
    case "Download":
      return <Download />;
    default:
      return <GitHub />;
  }
}
