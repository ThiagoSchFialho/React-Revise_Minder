export const useDb = () => {
    const getStudies = async () => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        const url = new URL('http://localhost:3000/study');
        url.searchParams.append('user_id', userId ? userId : '');

        try {
            const response = await fetch(url.toString(), {
                method: 'GET',
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();

            if (response.ok) {
                return data;
            } else {
                console.error('Erro ao recuperar estudos', data.error);
            }

        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    return { getStudies }
}