
import '../App.css'

function EditCategory ({valueEdit, categoryId}) {


    console.log(valueEdit)

    const handleEditCategory = async () => {

        const data = {
            id: categoryId,
            category: valueEdit, 
        }
        try {
            const response = await fetch(`http://localhost:8080/categories/${categoryId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                // Atualize o estado ou faça qualquer ação necessária após a exclusão bem-sucedida
                console.log('Categoria editada com sucesso!');
            } else {
                console.error('Falha ao editar categoria, ela não existe ou possui tarefas');
            }
        } catch (error) {
            console.error('Erro ao processar solicitação de exclusão:', error);
        }
    };

    return (

        <button onClick={handleEditCategory}>Edit Categoria</button>

    )

}

export default EditCategory