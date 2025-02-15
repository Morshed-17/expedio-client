import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React, { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
  title: string;
  subTitle: string;
  redirectText: string;
  redirect: string;
}

function AuthCard({
  title,
  subTitle,
  redirectText,
  redirect,
  children,
}: AuthCardProps) {
  return (
    <Card className="w-full md:max-w-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subTitle}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <CardDescription>
          {redirectText}{" "}
          <Link href={`/${redirect}`} className="underline text-blue-500">
            {redirect}
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}

export default AuthCard;
