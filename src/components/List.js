import React from 'react'

const List = props => {
    return (
        <ul className="list-group list-group-flush checked-list-box">
            {props.items.map(item => (
                <li key={item.id} className="input-group mb-1">
                    {
                        item.complete !== undefined ?
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" 
                                    checked={item.complete ? 'checked' : ''} 
                                    onChange={() => props.toggle(item)} />
                            </div>
                        </div>
                        :
                        null
                    }
                    <input type="text" className="form-control" readOnly
                        style={{ textDecoration: item.complete ? 'line-through' : 'none' }}
                        value={item.name} onChange={() => { }} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-danger" 
                            onClick={() => props.remove(item)}>Remove</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default List