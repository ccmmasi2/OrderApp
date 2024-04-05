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


        public int IdCustomer { get; set; }
        [ForeignKey("IDCUSTOMER")]
        public CustomerDTO Customer { get; set; }
    }
}
