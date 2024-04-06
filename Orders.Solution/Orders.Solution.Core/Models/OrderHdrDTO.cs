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


        [Column("CUSTOMERS"), Required]
        public int CustomerId { get; set; }

        public virtual CustomerDTO Customer { get; set; }
    }
}
