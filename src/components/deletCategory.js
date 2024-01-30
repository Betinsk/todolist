
import '../App.css'

function DeletCategory ({categoryId}) {
    console.log(categoryId)

    const handleDeleteCategory = async () => {
        console.log(categoryId)
        try {
            const response = await fetch(`http://localhost:8080/categories/${categoryId}`, {
                method: 'DELETE'
            });
            console.log(response)

            if (response.ok) {
                // Atualize o estado ou faça qualquer ação necessária após a exclusão bem-sucedida
                console.log('Categoria excluída com sucesso!');
            } else {
                console.error('Falha ao excluir categoria, ela não existe ou possui tarefas');
            }
        } catch (error) {
            console.error('Erro ao processar solicitação de exclusão:', error);
        }
    };

    return (

        <button onClick={handleDeleteCategory}>Delete Categoria</button>

    )

}

export default DeletCategory