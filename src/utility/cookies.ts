/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

const getCookieExpiration = (deleteCookie: boolean): string => {
	const date = new Date();

	if (!deleteCookie) date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
	else date.setTime(date.getTime() + -1 * 7 * 24 * 60 * 60 * 1000);

	return `expires=${date.toUTCString()};`;
};

export const setCookie = (
	name: string,
	value: string,
	expire: boolean,
): void => {
	document.cookie = `${name}=${value};${
		expire ? getCookieExpiration(false) : ""
	}SameSite=strict;path=/`;
};

export const getCookie = (name: string): string | null => {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);

	if (parts.length === 2) return parts?.pop()?.split(";")?.shift() ?? null;

	return null;
};

export const deleteCookie = (name: string): void => {
	document.cookie = `${name}="";${getCookieExpiration(
		true,
	)}SameSite=strict;path=/`;
};

export const deleteAllCookies = (): void => {
	const cookies = document.cookie.split(";");
	for (const cookie of cookies) {
		deleteCookie(cookie.split("=")[0]);
	}
};
