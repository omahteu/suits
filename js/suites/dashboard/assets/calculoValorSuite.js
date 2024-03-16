import receber from "../../../quartos/auxiliares/funcao4.js";

export default function calculoSuite(suite) {
  try {
    const base = receber("offs");
    const ficha = base.filter(i => i.suite === suite);
    
    const valorSuitx = ficha.length !== 0 ? parseFloat(ficha[0].valor) : 0;

    localStorage.setItem("suitx", valorSuitx.toFixed(2));
  } catch (error) {
    console.log(error);
  }
}
