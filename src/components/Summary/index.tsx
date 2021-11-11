import { useContext } from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../context/TransactionContext";
import { Container } from "./styles";

export function Summary() {
  const transactions = useContext(TransactionsContext);

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas" />
        </header>
        <strong>R$1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="saidas" />
        </header>
        <strong>-R$500,00</strong>
      </div>
      <div className="high-green">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}