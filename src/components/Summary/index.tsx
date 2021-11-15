import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { Container } from "./styles";
import {formatCurrency} from '../../util/masks';
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const  { transactions } = useTransactions();

//  const totalDeposits = transactions.reduce((acc, transaction) => {
//    if (transaction.type === 'deposit') {
//      return acc + transaction.amount;
//    }
//    return acc;
//  }, 0);

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.depositis += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, { 
    depositis: 0,
    withdraws: 0,
    total: 0
  })

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas" />
        </header>
        <strong>{formatCurrency(String(summary.depositis))}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="saidas" />
        </header>
        <strong>- {formatCurrency(String(summary.withdraws))}</strong>
      </div>
      <div className="high-green">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>{formatCurrency(String(summary.total))}</strong>
      </div>
    </Container>
  );
}