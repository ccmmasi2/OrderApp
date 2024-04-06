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


        [Column("PRODUCTS"), Required]
        public int ProductId { get; set; }

        public virtual ProductDTO Product { get; set; }
    }
}
