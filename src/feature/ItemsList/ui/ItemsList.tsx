import Item from './Item';

const ItemsList = () => {
  return (
    <article>
      <h2 className="font-semibold text-3xl leading-7 mb-11">Staff list</h2>
      <article className="flex justify-between mb-42">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </article>
    </article>
  );
};

export default ItemsList;
