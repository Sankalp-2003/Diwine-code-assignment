import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import TitleContainer from "./TitleContainer";

const TRANSACTION_HISTORY_DATA = [
  {
    id: "txn-1",
    date: "29 May 2026",
    time: "15:11:46",
    type: "DEBIT",
    direction: "From",
    counterpartyName: "raskinmaster",
    counterpartyRole: "MASTER",
    paymentMode: "Credit Reference",
    utr: "-",
  },
  {
    id: "txn-2",
    date: "29 May 2026",
    time: "15:11:46",
    type: "DEBIT",
    direction: "From",
    counterpartyName: "raskinmaster",
    counterpartyRole: "MASTER",
    paymentMode: "Credit Reference",
    utr: "-",
  },
  {
    id: "txn-3",
    date: "29 May 2026",
    time: "15:11:46",
    type: "DEBIT",
    direction: "From",
    counterpartyName: "raskinmaster",
    counterpartyRole: "MASTER",
    paymentMode: "Credit Reference",
    utr: "-",
  },
  {
    id: "txn-4",
    date: "29 May 2026",
    time: "15:11:46",
    type: "DEBIT",
    direction: "From",
    counterpartyName: "raskinmaster",
    counterpartyRole: "MASTER",
    paymentMode: "Credit Reference",
    utr: "-",
  },
  {
    id: "txn-5",
    date: "29 May 2026",
    time: "15:11:46",
    type: "DEBIT",
    direction: "From",
    counterpartyName: "raskinmaster",
    counterpartyRole: "MASTER",
    paymentMode: "Credit Reference",
    utr: "-",
  },
];

const TABLE_HEADINGS = [
  "Date",
  "Debit / Credit",
  "To / From",
  "Payment Mode",
  "UTR",
];

const GRID_COLUMNS = "grid-cols-[1.3fr_1fr_1.6fr_1.1fr_0.7fr]";

const TransactionHistory = () => {
  return (
    <div className="mt-5.5">
      <TitleContainer
        icon={<HiOutlineClipboardDocumentList />}
        title="Transaction History"
      />

      <div className="mt-5.5 bg-background-secondary2/10 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-140">
            <div
              className={`grid ${GRID_COLUMNS} bg-background-secondary/40 px-4 py-2.5`}
            >
              {TABLE_HEADINGS.map((heading) => (
                <p
                  key={heading}
                  className="text-primary text-[10px] font-semibold uppercase tracking-wide"
                >
                  {heading}
                </p>
              ))}
            </div>

            <div className="divide-y divide-background-secondary/20">
              {TRANSACTION_HISTORY_DATA.map((item) => (
                <div
                  key={item.id}
                  className={`grid ${GRID_COLUMNS} items-center px-4 py-3`}
                >
                  <div className="space-y-1">
                    <p className="text-primary-blue font-medium text-xs">
                      {item.date}
                    </p>
                    <p className="text-primary text-[10px]">({item.time})</p>
                  </div>

                  <div>
                    <span
                      className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md ${
                        item.type === "DEBIT"
                          ? "text-red-500 bg-red-500/10"
                          : "text-emerald-600 bg-emerald-600/10"
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>

                  <p className="text-xs">
                    <span className="text-primary text-[10px]">
                      {item.direction}:{" "}
                    </span>
                    <span className="text-primary-blue font-medium">
                      {item.counterpartyName}
                    </span>{" "}
                    <span className="text-primary text-[10px]">
                      ({item.counterpartyRole})
                    </span>
                  </p>

                  <p className="text-primary-blue text-xs">
                    {item.paymentMode}
                  </p>

                  <p className="text-primary text-xs">{item.utr}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
