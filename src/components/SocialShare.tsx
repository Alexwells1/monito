// SocialShare.tsx
import {
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  image?: string;
}

export default function SocialShare({
  url = window.location.href,
  title = document.title,
  description = "Check out this pet on MONITO - Pet Adoption Platform",
  image = "https://monito-pet-adoption.com/pet.png",
}: SocialShareProps) {
  const handleShare = (platform: string) => {
    if (typeof window !== "undefined" && (window as any).shareOnSocialMedia) {
      (window as any).shareOnSocialMedia(
        platform,
        url,
        title,
        description,
        image
      );
    } else {
      // Fallback for native share API
      if (navigator.share) {
        navigator
          .share({
            title: title,
            text: description,
            url: url,
          })
          .catch(console.error);
      }
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleShare("facebook")}>
          <Facebook className="mr-2 h-4 w-4" />
          Facebook
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare("twitter")}>
          <Twitter className="mr-2 h-4 w-4" />
          Twitter
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare("linkedin")}>
          <Linkedin className="mr-2 h-4 w-4" />
          LinkedIn
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare("whatsapp")}>
          <MessageCircle className="mr-2 h-4 w-4" />
          WhatsApp
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
