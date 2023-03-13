import openreview

client = openreview.Client(baseurl='https://api.openreview.net', username="anshuman8swain@gmail.com", password="z7NO3_pC4SjMGru")

# api to get notes
# print(client.get_notes(invitation='ICLR.cc/2019/Conference/-/Blind_Submission',limit=1))

# conflict_edges = client.get_edges(
#         invitation='ICLR.cc/2019/Conference/-/Blind_Submission',
#         label='Personal',
#         limit=10)
# print(conflict_edges)

# API to sibmit an article in openReview api
# note = openreview.Note(
#     invitation='ICLR.cc/2019/Conference/-/Blind_Submission',
#     readers=['everyone'],
#     writers=['adm']
#     authors=['']
#     signatures=['']
#     content={
#         'title': 'Test Submission',
#         'abstract': 'This is a test submission',
#         'authorids': ['']
#     }
# )

# client.post_note(note)

# API to sibmit an article in openReview api
note = openreview.Note(
    invitation='ICLR.cc/2019/Conference/-/Blind_Submission',    
    readers = [
        "Test/Venue",
        "~Test_Author1",
        "~Test_Author2"
    ],
    writers = [
        "Test/Venue",
        "~Test_Author1",
        "~Test_Author2"
    ],
    signatures = ["~PC_Id1"],
    content = {
        "title": "Test Submission 1",
        "authors": [
            "~Test_Author1",
            "~Test_Author2"
        ],
        "authorids": [
            "~Test_Author1",
            "~Test_Author2"
        ],
        "keywords": [
            "www testing 1", 
            "autonomous vehicles are not here"
        ],
        "TL;DR": "A test submission", 
        "abstract": "This is a test submission to check if it works.",
    }
)
url = client.put_attachment('./wwwDummyResearchPaper.pdf', 'Test/Venue/-/Submission', 'pdf')
print("content URL: ",url)
note.content['pdf'] = url

client.post_note(note)

# API to get all the notes
# notes = client.get_notes(invitation='ICLR.cc/2019/Conference/-/Blind_Submission')
# print(notes)