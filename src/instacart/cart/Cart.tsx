import { RootState, actions, useInstacartSelector, useInstacartDispatch } from '../sdk';

const List = ({ items }: { items: string[] }) => {
  return (
    <ul>
      { items.map(item => <li key={item}>{item}</li>)}
    </ul>
  )
}

export const Cart = () => {
  const isReady = useInstacartSelector((state: RootState) => state.app.ready)
  const items = useInstacartSelector((state: RootState) => state.app.cart)

  const dispatch = useInstacartDispatch()

  const onClick = () => {
    dispatch(actions.app.clear())
  }

  if (!isReady) {
    return <div>Widget loading...</div>
  }

  return (
    <div className="container">
      <h2>You cart currently has:</h2>
      { items.length > 0 ? <List items={items} /> : <p>Nada :(</p> }
      <button onClick={onClick}>Empty cart</button>
    </div>
  );
}