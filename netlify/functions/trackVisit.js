
export async function handler(event) {
	const ip = event.headers['x-forwarded-for'] || 'unknown';
	const path = event.queryStringParameters.path || '/';
	const timestamp = new Date().toISOString();

	console.log(`[Visit] ${timestamp} | ${ip} | ${path}`);

	return {
		statusCode: 200,
		body: JSON.stringify({ message: 'Visit logged' }),
	};
}