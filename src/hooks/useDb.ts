interface StudyValues {
    topic: string
    qnt_reviews: number
    study_date: string
    user_id: number
}

export const useDb = () => {
    const createStudy = async (values: StudyValues) => {
        const token = localStorage.getItem('token');

        try {
            const response = await fetch('https://revise-minder-backend.onrender.com/study', {
                method: 'POST',
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            const data = await response.json();
      
            if (response.ok) {
                return true;
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
            const response = await fetch(`https://revise-minder-backend.onrender.com/study/${id}`, {
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

        const url = new URL('https://revise-minder-backend.onrender.com/study');
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
            const response = await fetch(`https://revise-minder-backend.onrender.com/study/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            const data = await response.json();
      
            if (response.ok) {
                return true;
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
            const response = await fetch(`https://revise-minder-backend.onrender.com/study/${id}`, {
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

        const url = new URL('https://revise-minder-backend.onrender.com/review');
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
            const response = await fetch('https://revise-minder-backend.onrender.com/review', {
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

    const getUserEmail = async () => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        const url = new URL('https://revise-minder-backend.onrender.com/users/email');
        url.searchParams.append('user_id', userId ? userId : '');

        try {
            const response = await fetch(url.toString(), {
                method: 'GET',
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json'
                },
            });
            const data = await response.json();

            if (response.ok) {
                return data;
            } else {
                console.error('Erro ao recuperar email', data.error);
            }
        } catch (error) {
            console.error('Erro na requisição', error);
        }
    }

    const updateEmail = async (values: {email: string}) => {
        const token = localStorage.getItem('token');
        const user_id = localStorage.getItem('userId');

        try {
            const response = await fetch('https://revise-minder-backend.onrender.com/users/email', {
                method: 'PUT',
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_id, email: values.email })
            });
            const data = await response.json();

            if (data?.error === 'Email indisponivel') {
                return data;
            }

            if (response.ok) {
                return data;
            } else {
                console.error('Erro ao atualizar email', data.error);
            }
        } catch (error) {
            console.error('Erro na requisição', error);
        }
    }

    const checkPassword = async (password: string) => {
        const token = localStorage.getItem('token');
        const user_id = localStorage.getItem('userId');

        try {
            const response = await fetch('https://revise-minder-backend.onrender.com/users/password', {
              method:  'POST',
              headers: {
                'Authorization': `${token}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ user_id, password })
            });
            const data = await response.json();
      
            if (response.ok) { 
                return data;
            } else {
                console.error(data.error);
            }
      
          } catch (error) {
            console.error('Erro na requisição:', error);
          }
    }

    const updatePassword = async (values: {currentPassword: string, newPassword: string}) => {
        const token = localStorage.getItem('token');
        const user_id = localStorage.getItem('userId');

        try {
            const response = await fetch('https://revise-minder-backend.onrender.com/users/password', {
                method: 'PUT',
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_id, password: values.newPassword })
            });
            const data = await response.json();

            if (response.ok) {
                return data;
            } else {
                console.error('Erro ao atualizar senha', data.error);
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
        updateReviewStatus,
        getUserEmail,
        updateEmail,
        checkPassword,
        updatePassword
    }
}