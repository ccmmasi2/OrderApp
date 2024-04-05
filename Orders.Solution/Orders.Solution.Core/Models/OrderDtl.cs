using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Orders.Solution.Core.Models
{
    public class OrderDtl
    {
        [Key]
        public int ID { get; set; }


        [Required(ErrorMessage = "Required field")]
        public int Qty { get; set; }


        [Required(ErrorMessage = "Required field")]
        public double Price { get; set; }


        public int IdOrderHeader { get; set; }
        [ForeignKey("IdOrderHeader")]
        public OrderHeader OrderHeader { get; set; }


        public int IdProduct { get; set; }
        [ForeignKey("IdProduct")]
        public Product Product { get; set; }
    }
}
