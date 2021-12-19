import http from "service/http";
import ws from "service/ws";

/*
	Functions for doing API calls
*/

export const getMecanique = () => http.get("mecanique");
export const getElectronique = () => http.get("electronique");
export const getBrodeuse = () => http.get("brodeuse");
export const getSurjeteuse = () => http.get("surjeteuse");
