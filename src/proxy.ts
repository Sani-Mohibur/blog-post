import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";

export async function proxy(request: NextRequest) {
  const { data } = await userService.getSession();
  console.log(data);

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};
