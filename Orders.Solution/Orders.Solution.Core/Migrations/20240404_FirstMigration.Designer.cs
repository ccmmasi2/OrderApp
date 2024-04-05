using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Orders.Solution.Core.Data;

namespace Orders.Solution.Core.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20240404_FirstMigration")]
    partial class FirstMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.11")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);


            modelBuilder.Entity("Orders.Solution.Core.Models.CategoryDTO", b =>
            {
                b.Property<int>("ID")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int");

                SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                b.Property<string>("Name")
                    .IsRequired()
                    .HasMaxLength(20)
                    .HasColumnType("nvarchar(20)");

                b.HasKey("ID");

                b.ToTable("CATEGORIES");
            });


            //modelBuilder.Entity("Flight.AirService.DTOObjects.Models.Journey", b =>
            //{
            //    b.Property<int>("ID")
            //        .ValueGeneratedOnAdd()
            //        .HasColumnType("int");

            //    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

            //    b.Property<string>("Client")
            //        .IsRequired()
            //        .HasMaxLength(100)
            //        .HasColumnType("nvarchar(100)");

            //    b.Property<DateTime>("Date")
            //        .IsRequired()
            //        .HasColumnType("Date");

            //    b.Property<string>("Origin")
            //        .IsRequired()
            //        .HasMaxLength(3)
            //        .HasColumnType("nvarchar(3)");

            //    b.Property<string>("Destination")
            //        .IsRequired()
            //        .HasMaxLength(3)
            //        .HasColumnType("nvarchar(3)");

            //    b.Property<int>("TotalPrice")
            //        .IsRequired()
            //        .HasColumnType("decimal");

            //    b.HasKey("ID");

            //    b.ToTable("Journey");
            //});

            //modelBuilder.Entity("Flight.AirService.DTOObjects.Models.FlightDTL", b =>
            //{
            //    b.Property<int>("ID")
            //        .ValueGeneratedOnAdd()
            //        .HasColumnType("int");

            //    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

            //    b.Property<int>("IDTransport")
            //        .IsRequired()
            //        .HasColumnType("int");

            //    b.Property<int>("IDJourney")
            //        .IsRequired()
            //        .HasColumnType("int");

            //    b.Property<string>("Origin")
            //        .IsRequired()
            //        .HasMaxLength(3)
            //        .HasColumnType("nvarchar(3)");

            //    b.Property<string>("Destination")
            //        .IsRequired()
            //        .HasMaxLength(3)
            //        .HasColumnType("nvarchar(3)");

            //    b.Property<int>("Price")
            //        .IsRequired()
            //        .HasColumnType("decimal");

            //    b.HasKey("ID");

            //    b.HasIndex("IDTransport");

            //    b.HasIndex("IDJourney");

            //    b.ToTable("FlightDTL");
            //});

            base.BuildTargetModel(modelBuilder);
        }
    }
}
