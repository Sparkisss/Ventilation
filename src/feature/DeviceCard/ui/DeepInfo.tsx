interface DeepInfoProps {
  bid: { amount: string; currencyIcon: string };
  endDate: string;
}

const DeepInfo = ({ bid, endDate }: DeepInfoProps) => {
  return (
    <div className="flex justify-between mb-14">
      <article>
        <h3 className="font-normal text-lg">Current Bid</h3>
        <div className="flex items-center gap-4">
          <img className="h-8" src={bid.currencyIcon} alt="Currency" />
          <div className="font-medium text-2xl">{bid.amount}</div>
        </div>
      </article>
      <article className="flex flex-col items-end">
        <h3 className="font-normal text-lg">End in</h3>
        <div>{endDate}</div>
      </article>
    </div>
  );
};

export default DeepInfo;
