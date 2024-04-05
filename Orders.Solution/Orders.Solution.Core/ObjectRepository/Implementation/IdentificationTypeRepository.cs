using Orders.Solution.Core.BaseRepository;
using Orders.Solution.Core.Data;
using Orders.Solution.Core.Models;
using Orders.Solution.Core.ObjectRepository.Interface;

namespace Orders.Solution.Core.ObjectRepository.Implementation
{
    public class IdentificationTypeRepository : Repository<IdentificationTypeDTO>, IIdentificationTypeRepository
    {
        private readonly AppDbContext _dbcontext;

        public IdentificationTypeRepository(AppDbContext dbcontext) : base(dbcontext)
        {
            _dbcontext = dbcontext;
        }
    }
}
