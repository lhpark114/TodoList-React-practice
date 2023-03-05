import React, { useState } from 'react';


export default function TodoList() {
    const [todos, setTodos] = useState([{
        id: '123',
        text: 'Grocery',
        satus: 'active'
    },
    {
        id: '124',
        text: 'Study',
        satus: 'active'
    },
]);

    const handleAdd = (todo) => setTodos([...todos, todo])
        // Should update 'new to to' to todos
    return (
    <Section>
        <ul>
            {
                todos.map((item) => <li key={item.id}>{item.text}</li>)
            }
        </ul>
        <AddTodo onAdd={handleAdd} />
    </Section>
    );   
}




export default function Checked() {
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked(prev = !prev);
    return(
        <div className="itemlist">
            <input id="checkbox" type="checkbox" value={checked} onChange={handleChange}/>
        </div>
    );
}

export default function Item() {
    const [item, setItem] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const buttonClick = (e) => {
        
    }
    return (
        
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                id='item'
                name='item'
                value={item}
                onChange={(e) => {
                    setItem(e.target.value);
                }}
            />
            <button onClick={buttonClick} className="addButton">Add</button>
            <ul>list.map((item) => (<li>{item}</li>))</ul>
        </form>
        
    )
}
