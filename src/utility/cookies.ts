/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

/**
 * Get the cookie expiration date string.
 * @param deleteCookie - Whether the cookie should be deleted.
 * @returns The expiration date string for the cookie.
 */
const getCookieExpiration = (deleteCookie: boolean): string => {
	const date = new Date();

	if (!deleteCookie) date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
	else date.setTime(date.getTime() + -1 * 7 * 24 * 60 * 60 * 1000);

	return `expires=${date.toUTCString()};`;
};

/**
 * Set a cookie with the given name, value, and expiration.
 * @param name - The name of the cookie.
 * @param value - The value of the cookie.
 * @param expire - Whether the cookie should expire in 7 days, or "delete" to set expiration in the past.
 */
export const setCookie = (
	name: string,
	value: string,
	expire: boolean | "delete",
): void => {
	const expiration =
		expire === "delete"
			? getCookieExpiration(true)
			: expire
				? getCookieExpiration(false)
				: "";

	// biome-ignore lint/suspicious/noDocumentCookie: TODO: need to fix document cookies
	document.cookie = `${name}=${value};${expiration}SameSite=strict;path=/`;
};

/**
 * Get the value of a cookie by name.
 * @param name - The name of the cookie.
 * @returns The value of the cookie, or null if not found.
 */
export const getCookie = (name: string): string | null => {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);

	if (parts.length === 2) return parts?.pop()?.split(";")?.shift() ?? null;

	return null;
};

/**
 * Delete a cookie by name.
 * @param name - The name of the cookie.
 */
export const deleteCookie = (name: string): void => {
	setCookie(name, "", "delete");
};

/**
 * Delete all cookies.
 */
export const deleteAllCookies = (): void => {
	const cookies = document.cookie.split(";");
	for (const cookie of cookies) {
		deleteCookie(cookie.split("=")[0]);
	}
};
