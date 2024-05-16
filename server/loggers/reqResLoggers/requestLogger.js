export const LogRequest = (req, apiEndpoint) => {
    console.log("----------------------------------------------------------------------------------");
    console.log("Request received in: " + apiEndpoint);
    console.log(req);
    console.log("----------------------------------------------------------------------------------");
}