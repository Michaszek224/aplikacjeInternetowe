using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Text.Json;

namespace Projekt_pierwszy.Pages
{
    public class RulesModel : PageModel
    {
        [BindProperty]
        public string Rule { get; set; }

        public List<string> Rules { get; set; } = new();

        public void OnGet()
        {
            var json = HttpContext.Session.GetString("Rules");
            if (json != null)
            {
                Rules = JsonSerializer.Deserialize<List<string>>(json) ?? new List<string>();
            }
        }

        public IActionResult OnPost()
        {
            var rules = new List<string>();

            var json = HttpContext.Session.GetString("Rules");
            if (json != null)
            {
                rules = JsonSerializer.Deserialize<List<string>>(json) ?? new List<string>();
            }

            if (!string.IsNullOrWhiteSpace(Rule))
            {
                rules.Add(Rule);
                HttpContext.Session.SetString("Rules", JsonSerializer.Serialize(rules));
            }

            return RedirectToPage();
        }
    }
}
