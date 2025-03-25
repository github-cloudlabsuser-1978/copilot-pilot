function skillsMember()
{
    var member = new Object();
    member.skills = ['JavaScript', 'Python', 'Ruby'];
    member.showSkills = function() {
        this.skills.forEach(function(skill) {
            console.log(skill);
        });
    };
    return member;
}
var member = skillsMember();
member.showSkills();