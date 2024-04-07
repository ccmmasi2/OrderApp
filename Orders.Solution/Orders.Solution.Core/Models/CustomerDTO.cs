using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Orders.Solution.Core.Models
{
    [Table("CUSTOMERS")]
    public class CustomerDTO
    {
        [Key]
        public int ID { get; set; }


        [Column("IDENTIFICATION"), Required]
        public long Identification { get; set; }


        [Column("NAME"), MaxLength(50), Required]
        public string Name { get; set; }


        [Column("LASTNAME"), MaxLength(50), Required]
        public string LastName { get; set; }


        [Column("BIRTHDAY"), Required]
        public DateTime BirthDay { get; set; }


        [Column("EMAIL"), MaxLength(100), Required]
        public string Email { get; set; }


        [Column("PHONENUMBER"), MaxLength(50)]
        public string PhoneNumber { get; set; }


        [ForeignKey("IDENTIFICATIONTYPES")]
        public int IdentificationTypeId { get; set; }

        public virtual IdentificationTypeDTO IdentificationType { get; set; }
    }
}
