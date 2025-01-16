import Download from "@/app/icons/Download";
import Email from "@/app/icons/Email";
import GitHub from "@/app/icons/GitHub";
import Instagram from "@/app/icons/Instagram";
import LinkedIn from "@/app/icons/LinkedIn";

type IconType = {
  name: string;
};

export default function Icon(icon: IconType) {
  const name = icon.name.toLowerCase();
  switch (name) {
    case "github":
      return <GitHub />;
    case "linkedin":
      return <LinkedIn />;
    case "instagram":
      return <Instagram />;
    case "email":
      return <Email />;
    case "download":
      return <Download />;
    default:
      return <GitHub />;
  }
}
