import axios from "axios";
import config from "public/data.json";
import ws from "service/ws";

// Default headers
const headers = {
	Accept: "application/json",
	"Content-Type": "application/json",
};

// Gets
function get(endpoint?: string): Promise<unknown> {
	return new Promise<unknown>((resolve, reject) => {
		axios
			.get(`${config.baseUrl}/${ws[endpoint]}`, {
				headers,
			})
			.then(({ data }) => resolve(data))
			.catch((e) => reject(e));
	});
}

// The http service for API calls
const http = {
	get,
};

export default http;
