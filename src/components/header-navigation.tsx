import { LucideKanban } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import Container from "./container";

export default function HeaderNavigation() {
  return (
    <nav>
      <Container>
        <div className="flex items-center justify-between py-4">
          <div>
            <Link href="/" className="text-2xl font-bold">
              <LucideKanban className="h-6 w-6" />
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link
              href="/about-us"
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              Contact Us
            </Link>
            <Link
              href="/blog"
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              Blog
            </Link>
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
