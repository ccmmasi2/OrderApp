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


        [ForeignKey("ORDERHDRS")]
        public int OrderHeaderId { get; set; }


        [ForeignKey("PRODUCTS")]
        public int ProductId { get; set; }

        public virtual OrderHdrDTO OrderHeader { get; set; }

        public virtual ProductDTO Product { get; set; }
    }
}
