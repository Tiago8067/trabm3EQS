using System.ComponentModel.DataAnnotations;

namespace testAuten.Models
{
    public class Produto
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        [DataType(DataType.Currency)]
        public decimal Preco { get; set; }
    }
}
