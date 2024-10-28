import { useMemo } from 'react';
import { Container } from './components/Container';
import { Content } from './components/Content';
import { Filters } from './components/Filters';
import { Form } from './components/Form';
import { Item } from './components/Item';
import { List } from './components/List';
import useLocalStorage from './hooks/useLocalStorage'; // ajuste o caminho se necessário

export function App() {
    const [lista, setLista] = useLocalStorage("tarefas", []);
    const [filter, setFilter] = useLocalStorage("filtro", "all");

    const addTask = (task) => {
        setLista((prevLista) => [
            ...prevLista,
            { text: task, completed: false },
        ]);
    };

    const listaFiltrada = useMemo(() => {
        if (filter === "all") {
            return lista;
        }
        if (filter === "completed") {
            return lista.filter((item) => item.completed);
        }
        return lista.filter((item) => !item.completed);
    }, [lista, filter]);

    return (
        <Container>
            <Content>
                <h1 className="text-white text-center text-2xl font-bold">TO DO LIST 📋✔️</h1>
                <Form onSubmit={addTask} />
                <Filters filter={filter} setFilter={setFilter} />
                <List>
                    {listaFiltrada.map((item, index) => (
                        <Item
                            key={index} // Adicione uma chave única para cada item
                            text={item.text}
                            completed={item.completed}
                            onClick={() => {
                                setLista((prevLista) =>
                                    prevLista.map((itemX, indexX) => {
                                        if (index === indexX) {
                                            return { ...itemX, completed: !itemX.completed };
                                        }
                                        return itemX;
                                    })
                                );
                            }}
                        />
                    ))}
                </List>
            </Content>
        </Container>
    );
}
