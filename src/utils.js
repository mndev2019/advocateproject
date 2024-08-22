import axios from "axios";
export const url = "https://lawoffice.doc24.care/admin";


export const get_services = async () => {
    try {
        const response = await axios.get(`${url}/api/services`);
        return response.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        return []; // or handle the error as needed
    }

}
export const get_data = async (endpoint) => {
    try {
        const response = await axios.get(`${url}/api/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        return []; // or handle the error as needed
    }
}
export const get_service_details = async (srl) => {
    try {
        const response = await axios.get(`${url}/api/services/${srl}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        return []; // or handle the error as needed
    }
}
export const rest_services = async (srl) => {
    try {
        const response = await axios.get(`${url}/api/rest_services/${srl}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        return []; // or handle the error as needed
    }
}
export const get_contact_details = async (type) => {
    try {
        const response = await axios.get(`${url}/api/get_contact_details/${type}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        return []; // or handle the error as needed
    }
}
export const get_contact_value = async (type) => {
    try {
        const response = await axios.get(`${url}/api/get_contact_value/${type}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        return []; // or handle the error as needed
    }
}

export const get_testimonilals = async () => {
    try {
        const response = await axios.get(`${url}/api/testimonials`);
        return response.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        return []; // or handle the error as needed
    }
}
export const get_teams = async () => {
    try {
        const response = await axios.get(`${url}/api/teams`);
        return response.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        return []; // or handle the error as needed
    }
}
export const get_profile = async (slug) => {
    try {
        const response = await axios.get(`${url}/api/teams/${slug}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        return []; // or handle the error as needed
    }
}
export const get_blogs = async () => {
    try {
        const response = await axios.get(`${url}/api/blogs`);
        return response.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        return []; // or handle the error as needed
    }
}

export const get_single_blog = async (slug) => {
    try {
        const response = await axios.get(`${url}/api/blogs/${slug}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        return []; // or handle the error as needed
    }
}
export const send_query = async (data) => {
    try {
        const response = await axios.post(`${url}/api/send_query`, data, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        return []; // or handle the error as needed
    }
}
