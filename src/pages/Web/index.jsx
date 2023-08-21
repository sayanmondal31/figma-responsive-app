import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Text } from "components";

const WebPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-plusjakartasans sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[120px] h-full items-center justify-start md:px-5 w-full">
          <Img
            className="h-[97px] w-full"
            src="images/img_logo.svg"
            alt="logo"
          />
          <div className="flex flex-col gap-8 h-[505px] md:h-auto items-start justify-start w-80">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                  size="txtPlusJakartaSansRomanSemiBold32"
                >
                  Welcom back
                </Text>
                <Text
                  className="text-base text-gray-600 w-full"
                  size="txtPlusJakartaSansRomanMedium16"
                >
                  Welcome back please enter your details
                </Text>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtPlusJakartaSansRomanSemiBold16"
                    >
                      Email
                    </Text>
                    <Input
                      name="frameOne"
                      placeholder="Enter Your Email"
                      className="font-semibold leading-[normal] p-0 placeholder:text-gray-600 sm:pl-5 text-base text-gray-600 text-left w-full"
                      wrapClassName="outline outline-[1px] outline-gray-400 pl-6 pr-3 py-[11px] rounded-[16px] w-full"
                      type="email"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtPlusJakartaSansRomanSemiBold16"
                    >
                      Password
                    </Text>
                    <Input
                      name="password_One"
                      placeholder="******"
                      className="font-semibold leading-[normal] p-0 placeholder:text-gray-600 sm:px-5 text-base text-gray-600 text-left w-full"
                      wrapClassName="outline outline-[1px] outline-gray-400 pb-[13px] pl-6 pr-[35px] pt-[9px] rounded-[16px] w-full"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-[181px]">
                    <div className="border border-gray-400 border-solid h-6 rounded w-6"></div>
                    <Text
                      className="flex-1 text-gray-600 text-sm w-auto"
                      size="txtPlusJakartaSansRomanMedium14"
                    >
                      Remember me
                    </Text>
                  </div>
                  <a
                    href="javascript:"
                    className="flex-1 text-blue-700 text-right text-sm w-auto"
                  >
                    <Text size="txtPlusJakartaSansRomanMedium14Blue700">
                      Forgot password
                    </Text>
                  </a>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Button className="bg-blue-700 cursor-pointer font-semibold leading-[normal] py-[11px] rounded-[16px] text-base text-center text-white-A700 w-full">
                    Sign In
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[320px] outline outline-[1px] outline-gray-400 px-[35px] py-[11px] rounded-[16px]"
                    onClick={() => googleSignIn()}
                    leftIcon={
                      <Img
                        className="h-4 mb-[5px] mr-2.5"
                        src="images/img_icon_icon_google.svg"
                        alt="Icon/Icon/google"
                      />
                    }
                  >
                    <div className="font-semibold leading-[normal] sm:px-5 text-base text-center text-gray-600">
                      Sign in with Google
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center w-full">
              <Text
                className="text-base text-center text-gray-600 w-auto"
                size="txtPlusJakartaSansRomanMedium16"
              >
                <span className="text-gray-600 font-plusjakartasans font-medium">
                  Don.t have an account?{" "}
                </span>
                <span className="text-blue-700 font-plusjakartasans font-medium">
                  Sign up
                </span>
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start md:px-5 w-1/2 md:w-full">
          <Img
            className="h-[900px] md:h-auto object-cover w-full"
            src="images/img_ramleewebsite.png"
            alt="ramleewebsite"
          />
        </div>
      </div>
    </>
  );
};

export default WebPage;
