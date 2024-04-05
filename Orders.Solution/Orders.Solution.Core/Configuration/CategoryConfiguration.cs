using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Orders.Solution.Core.Models;

namespace Orders.Solution.Core.Configuration
{
    public class CategoryConfiguration : IEntityTypeConfiguration<CategoryDTO>
    {
        public void Configure(EntityTypeBuilder<CategoryDTO> builder)
        {
            builder.Property(c => c.ID).IsRequired();
            builder.Property(c => c.Name).IsRequired().HasMaxLength(20);
        }
    }
}
