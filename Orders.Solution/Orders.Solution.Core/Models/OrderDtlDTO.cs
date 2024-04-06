using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Orders.Solution.Core.Models
{
    [Table("ORDERDTLS")]
    public class OrderDtlDTO
    {
        [Key]
        public int ID { get; set; }


        [Column("QTY"), Required]
        public int Qty { get; set; }


        [Column("PRICE"), Required]
        public double Price { get; set; }


        public int IdOrderHeader { get; set; }
        [ForeignKey("IDORDERHEADER")]
        public virtual OrderHdrDTO OrderHeader { get; set; }


        public int IdProduct { get; set; }
        [ForeignKey("IDPRODUCT")]
        public virtual ProductDTO Product { get; set; }
    }
}
