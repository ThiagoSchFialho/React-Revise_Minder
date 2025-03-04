interface StudyValues {
    topic: string
    qnt_reviews: number
    study_date: string
    user_id: number
}

export const useDb = () => {
    const host = 'https://revise-minder-backend.onrender.com';

    const addQntStudyAdded = async () => {
        const token = localStorage.getItem('token');
        const user_id = localStorage.getItem('userId');

        try {
            const response = await fetch(`${host}/users/studyAdded`, {
                method: 'PUT',
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_id })
            });
            const data = await response.json();

            if (response.ok) {
                return true;
            } else {
                console.error('Erro ao incrementar estudos adicionados', data.error);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    const createStudy = async (values: StudyValues) => {
        const token = localStorage.getItem('token');

        try {
            const response = await fetch(`${host}/study`, {
                method: 'POST',
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            const data = await response.json();
      
            if (response.ok) {
                const response = await addQntStudyAdded();
                if (response) {
                    return true;
                }
                return false;
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
            const response = await fetch(`${host}/study/${id}`, {
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

        const url = new URL(`${host}/study`);
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
            const response = await fetch(`${host}/study/${id}`, {
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
            const response = await fetch(`${host}/study/${id}`, {
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

        const url = new URL(`${host}/review`);
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
            const response = await fetch(`${host}/review`, {
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

        const url = new URL(`${host}/users/email`);
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
            const response = await fetch(`${host}/users/email`, {
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
            const response = await fetch(`${host}/users/password`, {
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
            const response = await fetch(`${host}/users/password`, {
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

    const getUser = async () => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        const url = new URL(`${host}/users`);
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
                console.error('Erro ao recuperar usuário', data.error);
            }
        } catch (error) {
            console.error('Erro na requisição', error);
        }
    }

    const addAchievement = async (name: string, reward: string) => {
        const token = localStorage.getItem('token');
        const user_id = localStorage.getItem('userId');

        try {
            const response = await fetch(`${host}/achievement`, {
                method: 'POST',
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, reward, user_id })
            });
            const data = await response.json();
      
            if (response.ok) {
                return data;
            } else {
                console.error('Erro ao criar conquista:', data.error);
            }
          } catch (error) {
              console.error('Erro na requisição:', error);
          }
    }

    const getAchievement = async (name: string) => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        const url = new URL(`${host}/achievement`);
        url.searchParams.append('user_id', userId ? userId : '');
        url.searchParams.append('achievement_name', name);

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
                console.error('Erro ao recuperar conquista', data.error);
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
        updatePassword,
        getUser,
        addAchievement,
        getAchievement
    }
}