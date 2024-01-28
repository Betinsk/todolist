import { useState } from "react";

function CreateCategory() {

    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    //função que pega o value do input
    const handleTitleChange = (e) => {
        setCategory(e.target.value);
    }

    //função que pega o value do input
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    //Função que da o submit no form
    const handleSubmit = async (e) => {
        //Tirando esse atributo a página recarregará para atualizar o array de categorias
       // e.preventDefault();
        const data = {
            category: category,
            description: description
        }

        try {
            const response = await fetch('http://localhost:8080/categories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                // Faça algo se a solicitação for bem-sucedida
                console.log('Dados enviados com sucesso para o backend!');
            } else {
                // Trate erros de solicitação, se necessário
                console.error('Erro ao enviar dados para o backend');
            }
        } catch (error) {
            // Trate erros de rede ou de outra natureza
            console.error('Erro de rede:', error)
        }
        // Limpa os campos após o envio
        setCategory('');
        setDescription('')
    }

    return (

        <div className="toDoForm">
            <h2>Criar Categoria:</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Digite o título"
                    value={category}
                    onChange={handleTitleChange}
                />
                <br />
                <input
                    type="text"
                    placeholder="Digite a descrição"
                    value={description}
                    onChange={handleDescriptionChange}
                />
                <br />
                <button type="submit">Criar categoria</button>
            </form>
        </div>
    )
}

export default CreateCategory;
