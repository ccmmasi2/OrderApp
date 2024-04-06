using Microsoft.EntityFrameworkCore;
using Orders.Solution.Core.Data;
using Orders.Solution.Core.Models;
using System.Text.Json;

namespace Orders.Solution.Core.Init
{
    public class DBInitializer : IDBInitializer
    {
        private readonly AppDbContext _db;

        public DBInitializer(AppDbContext db)
        {
            _db = db;
        }

        public void Initialize()
        {
            try
            {
                if (_db.Database.GetPendingMigrations().Count() > 0)
                {
                    _db.Database.Migrate();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            if (!_db.Categories.Any())
            {
                var LDataJson = File.ReadAllText("../Orders.Solution.Core/Data/SeedData/Categories.json");
                var LData = JsonSerializer.Deserialize<List<CategoryDTO>>(LDataJson);
                _db.Categories.AddRange(LData);
            }

            if (_db.ChangeTracker.HasChanges())
                _db.SaveChanges();

            if (!_db.IdentificationTypes.Any())
            {
                var LDataJson = File.ReadAllText("../Orders.Solution.Core/Data/SeedData/IdentificationTypes.json");
                var LData = JsonSerializer.Deserialize<List<IdentificationTypeDTO>>(LDataJson);
                _db.IdentificationTypes.AddRange(LData);
            }

            if (_db.ChangeTracker.HasChanges())
                _db.SaveChanges();

            if (!_db.Products.Any())
            {
                var LDataJson = File.ReadAllText("../Orders.Solution.Core/Data/SeedData/Products.json");
                var LData = JsonSerializer.Deserialize<List<ProductDTO>>(LDataJson);
                _db.Products.AddRange(LData);
            }

            if (_db.ChangeTracker.HasChanges())
                _db.SaveChanges();

            if (!_db.Stock.Any())
            {
                var LDataJson = File.ReadAllText("../Orders.Solution.Core/Data/SeedData/Stock.json");
                var LData = JsonSerializer.Deserialize<List<StockDTO>>(LDataJson);
                _db.Stock.AddRange(LData);
            }

            if (_db.ChangeTracker.HasChanges())
                _db.SaveChanges();
        }
    }
}
