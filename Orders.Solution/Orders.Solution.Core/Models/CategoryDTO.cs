using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Orders.Solution.Core.Models
{
    [Table("CATEGORIES")]
    public class CategoryDTO
    {
        [Key]
        public int ID { get; set; }


        [Column("NAME"), MaxLength(20), Required]
        public string Name { get; set; }
    }
}
