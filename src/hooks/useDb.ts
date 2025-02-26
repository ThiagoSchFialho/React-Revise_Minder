import { useNavigate } from "react-router-dom";

interface StudyValues {
    topic: string
    qnt_reviews: number
    study_date: string
    user_id: number
}

export const useDb = () => {
    const navigate = useNavigate();

    const createStudy = async (values: StudyValues) => {
        const token = localStorage.getItem('token');

        try {
            const response = await fetch('http://localhost:3000/study', {
                method: 'POST',
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            const data = await response.json();
      
            if (response.ok) {
                navigate('/myStudies');
            } else {
                console.error('Erro criação do estudo:', data.error);
            }
          } catch (error) {
              console.error('Erro na requisição:', error);
          }
    }

    const getStudy = async (id: string) => {
        const token = localStorage.getItem('token');

        try {
            const response = await fetch(`http://localhost:3000/study/${id}`, {
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
                console.error('Erro ao recuperar estudo', data.error);
            }

        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

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

    const updateStudy = async (values: StudyValues, id: string) => {
        const token = localStorage.getItem('token');

        try {
            const response = await fetch(`http://localhost:3000/study/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            const data = await response.json();
      
            if (response.ok) {
                navigate('/myStudies');
            } else {
                console.error('Erro na edição do estudo:', data.error);
            }
          } catch (error) {
              console.error('Erro na requisição:', error);
          }
    }

    const deleteStudy = async (id: number) => {
        const token = localStorage.getItem('token');

        try {
            const response = await fetch(`http://localhost:3000/study/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json();

            if (response.ok) {
                return data;
            } else {
                console.error('Erro ao deletar estudo', data.error);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    const getReviews = async () => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        const url = new URL('http://localhost:3000/review');
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
                console.error('Erro ao recuperar revisões', data.error);
            }

        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    const updateReviewStatus = async (id: number, status: string) => {
        const token = localStorage.getItem('token');

        try {
            const response = await fetch('http://localhost:3000/review', {
                method: 'PUT',
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id, status })
            });
            const data = await response.json();

            if (response.ok) {
                return data;
            } else {
                console.error('Erro ao atualizar revisão', data.error);
            }
        } catch (error) {
            console.error('Erro na requisição', error);
        }
    }

    return {
        createStudy,
        getStudy,
        getStudies,
        updateStudy,
        deleteStudy,
        getReviews,
        updateReviewStatus
    }
}