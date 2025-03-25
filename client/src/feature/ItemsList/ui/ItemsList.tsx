import Item from './Item';

const ItemsList = ({ cardsData, setIsSelected }: any) => {
  return (
    <article>
      <h2 className="font-semibold text-3xl leading-7 mb-11">Staff list</h2>
      <article className="flex flex-wrap justify-between mb-42">
        {cardsData.map((card: any) => (
          <Item key={card.id} {...card} setIsSelected={setIsSelected} />
        ))}
      </article>
    </article>
  );
};

export default ItemsList;
