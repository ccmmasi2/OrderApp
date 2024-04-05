using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Orders.Solution.Core.Models
{
    [Table("STOCK")]
    public class StockDTO
    {
        [Key]
        public int ID { get; set; }


        [Column("QTY"), Required]
        public int Qty { get; set; }


        public int IdProduct { get; set; }
        [ForeignKey("IDPRODUCT")]
        public ProductDTO Product { get; set; }
    }
}
