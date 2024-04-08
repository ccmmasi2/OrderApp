using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Orders.Solution.Core.Models
{
    [Table("ORDERHDRS")]
    public class OrderHdrDTO
    {
        [Key]
        public int ID { get; set; }


        [Column("ORDERDATE"), Required]
        public DateTime OrderDate { get; set; }


        [ForeignKey("CUSTOMERS")]
        public int CustomerId { get; set; }


        [Column("SHIPPINGADDRESS"), MaxLength(500), Required]
        public string ShippingAddress { get; set; }

        public virtual CustomerDTO Customer { get; set; }
    }
}
