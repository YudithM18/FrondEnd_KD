//Obtener datos del servidor
async function GetTestimonios() {

    try {
    
        const response = await fetch('http://127.0.0.1:8000/api/testimonios/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const testimonies = await response.json();
        return testimonies;
    } catch (error) {
        console.error('Error fetching testimonies:', error);
        throw error;
    }
}

export default GetTestimonios;